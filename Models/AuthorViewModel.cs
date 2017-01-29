using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookFinder.Models
{
    public class AuthorViewModel
    {
        public int AuthorID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Country { get; set; }
    }
}