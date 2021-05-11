using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace InstagramClone.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public HomeController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [Authorize]
        [Route("index")]
        public IActionResult AuthorizedFallback()
        {
            var file = _webHostEnvironment.ContentRootFileProvider.GetFileInfo("ClientApp/dist/index.html");
            return PhysicalFile(file.PhysicalPath, "text/html");
        }
    }
}
