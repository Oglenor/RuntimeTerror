using InstagramClone.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace InstagramClone.Web.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private static List<Image> _images = new List<Image>();

        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] ImageDTO image)
        {
            var newImage = new Image()
            {
                Title = image.Title,
                Description = image.Description,
                UploadDate = DateTime.Now,
                Uploader = "valaki", // User.Identity.Name vagy valami ilyesmi gondolom van a facebook loginnal is?
            };

            using (var ms = new MemoryStream())
            {
                await image.File.CopyToAsync(ms);
                newImage.ImageData = ms.ToArray();
            }

            _images.Add(newImage);

            return Ok();
        }

        [HttpGet]
        public IEnumerable<Image> GetImages() 
        {
            return _images;
        }
    }
}
