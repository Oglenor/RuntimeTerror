using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace InstagramClone.Web.Models
{
    public class ImageDTO
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public IFormFile File { get; set; }
    }
}
