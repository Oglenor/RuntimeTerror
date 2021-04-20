using InstagramClone.Web.Models;
using InstagramClone.Web.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly ApplicationDbContext _dbContext;

        public ImageController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] ImageDTO image)
        {
            var newImage = new Image()
            {
                Title = image.Title,
                Description = image.Description,
                UploadDate = DateTime.Now,
            };

            using (var ms = new MemoryStream())
            {
                await image.File.CopyToAsync(ms);
                newImage.ImageData = ms.ToArray();
            }

            _dbContext.Images.Add(newImage);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<Image>> GetImages() => await _dbContext.Images.ToListAsync();

        [HttpGet]
        [Route("like/{id}")]
        public async Task<IActionResult> LikeImage(int id)
        {
            var image = await _dbContext.Images.FirstOrDefaultAsync(x => x.Id == id);

            image.LikeCount++;
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("dislikelike/{id}")]
        public async Task<IActionResult> DislikeImage(int id)
        {
            var image = await _dbContext.Images.FirstOrDefaultAsync(x => x.Id == id);

            image.LikeCount--;
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
