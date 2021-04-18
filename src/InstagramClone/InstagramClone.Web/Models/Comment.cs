namespace InstagramClone.Web.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public ApplicationUser User { get; set; }

        public string Text { get; set; }
    }
}
