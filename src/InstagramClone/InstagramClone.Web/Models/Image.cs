using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InstagramClone.Web.Models
{
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime UploadDate { get; set; }

        public string Description { get; set; }

        public int LikeCount { get; set; }              

        public byte[] ImageData { get; set; }
    }
}
