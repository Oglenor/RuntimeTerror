using System;

namespace InstagramClone.Web.Models
{
    public class Image
    {
        public string Uploader { get; set; }

        public string Title { get; set; }

        public DateTime UploadDate { get; set; }

        public string Description { get; set; }

        public byte[] ImageData { get; set; }
    }
}
