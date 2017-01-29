using System;

namespace BookFinder.Models
{
    public class BookViewModel
    {
        public int BookID { get; set; }
        public int ISBN { get; set; }
        public string Title { get; set; }
        public int? Rating { get; set; }
        public int AuthorID { get; set; }
        public DateTime? PublicationDate { get; set; }
    }
}