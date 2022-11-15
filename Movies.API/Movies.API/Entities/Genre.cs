﻿using Movies.API.Validations;
using System.ComponentModel.DataAnnotations;

namespace Movies.API.Entities
{

    public class Genre
    {
        public int Id { get; set; }
        
        public string? Name { get; set; }
    }

}
