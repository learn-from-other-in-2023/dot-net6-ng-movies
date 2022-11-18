namespace Movies.API.Dtos
{

    public class PaginationDto
    {
        private int recordsPerPage = 10;
        private readonly int maxAmount = 50;

        public int Page { get; set; } = 1;

        public int RecordsPerPage
        {
            get { return recordsPerPage; }

            set { recordsPerPage = (value > maxAmount) ? maxAmount : value; }
        }

    }

}