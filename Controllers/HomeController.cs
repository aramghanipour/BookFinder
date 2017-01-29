using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BookFinder.Core.Repositories;

namespace BookFinder.Controllers
{
    public class HomeController : Controller
    {
        private readonly IAuthorRepository _authorRepository;

        public HomeController() { }

        public HomeController(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;

            if(_authorRepository == null) throw new NullReferenceException();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}