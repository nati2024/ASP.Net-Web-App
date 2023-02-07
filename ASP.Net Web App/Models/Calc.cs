using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.Net_Web_App.Models
{
    public class Calc
    {
        [Range(0,100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int project { get; set; }
        [Range(0, 100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int final { get; set; }
        [Range(0, 100, ErrorMessage = "Number needs to be between 0 and 100")]
        public int intex { get; set; }
       
    }
}
