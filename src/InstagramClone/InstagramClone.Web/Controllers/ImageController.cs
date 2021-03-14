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
        public async Task<IActionResult> Upload([FromForm] string title, [FromForm] string uploader, [FromForm] string description, [FromForm] IFormFile file)
        {
            var newImage = new Image()
            {
                Title = title,
                Description = description,
                Uploader = uploader,
                UploadDate = DateTime.Now,
            };

            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                newImage.ImageData = stream.ToArray();
            }

            _images.Add(newImage);
            return Ok();
        }
    }
}
