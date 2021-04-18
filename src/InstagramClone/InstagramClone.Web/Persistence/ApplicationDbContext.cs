using InstagramClone.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace InstagramClone.Web.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Image> Images { get; set; }

        public DbSet<Comment> Comments { get; set; }
    }
}
