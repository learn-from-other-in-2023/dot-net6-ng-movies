﻿namespace Movies.API.Dtos
{

    public class ActorDto
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string? Biography { get; set; }

        public string? Picture { get; set; }
    }

}
