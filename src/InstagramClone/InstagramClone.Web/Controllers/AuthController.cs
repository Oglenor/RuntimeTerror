using InstagramClone.Web.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace InstagramClone.Web.Controllers
{    
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("mypolicy")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
                
        public AuthController(UserManager<ApplicationUser> userManager)
        {
            this._userManager = userManager;
        }

        [Route("signin")]
        public IActionResult SignInWithFacebook(string returnUrl)
        {
            var redirectUrl = Url.Action(nameof(AuthController.SignInCallback), "Auth", new { returnUrl = returnUrl });
            return Challenge(new AuthenticationProperties()
            {
                RedirectUri = redirectUrl,
            }, FacebookDefaults.AuthenticationScheme);
        }

        [Route("callback")]
        [HttpGet]
        public async Task<IActionResult> SignInCallback(string returnUrl)
        {
            var authResult = await HttpContext.AuthenticateAsync(IdentityConstants.ExternalScheme);

            if (!authResult.Succeeded)
            {
                return Forbid();
            }

            var user = _userManager.FindByNameAsync(authResult.Ticket.Principal.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (user is null)
            {
                var result = await _userManager.CreateAsync(new ApplicationUser()
                {
                    UserName = authResult.Ticket.Principal.FindFirst(ClaimTypes.NameIdentifier).Value,
                });

                if (!result.Succeeded)
                {
                    throw new Exception("User creation failed.");
                }
            }

            await HttpContext.SignInAsync(IdentityConstants.ApplicationScheme, new ClaimsPrincipal(authResult.Ticket.Principal.Identity));

            return LocalRedirect(returnUrl);
        }
    }
}
