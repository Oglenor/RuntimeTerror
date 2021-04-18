using System;
using System.Collections;
using System.Collections.Generic;

namespace InstagramClone.Web.Models
{
    public class Image
    {
        public int Id { get; set; }

        public ApplicationUser Uploader { get; set; }

        public string Title { get; set; }

        public DateTime UploadDate { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public byte[] ImageData { get; set; }
    }
}
