using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Assignment { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Project { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Quiz { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Exam { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Intex { get; set; }
    }
}
