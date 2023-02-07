using ASP.Net_Web_App.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.Net_Web_App.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult OtherView()
        {
            return View();
        }

        [HttpPost]
        public IActionResult OtherView(Calc model)
        {
            return View();
        }
    }
}
