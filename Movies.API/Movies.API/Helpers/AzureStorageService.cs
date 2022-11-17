﻿using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace Movies.API.Helpers
{
    public class AzureStorageService : IFileStorageService
    {
        private readonly string connectionString;

        public AzureStorageService(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("AzureStorageConnection");
        }

        public async Task DeleteFile(string fileRoute, string containerName)
        {
            if (string.IsNullOrEmpty(fileRoute))
            {
                return;
            }

            var client = new BlobContainerClient(connectionString, containerName);
            await client.CreateIfNotExistsAsync();

            var fileName = Path.GetFileName(fileRoute);
            var blob = client.GetBlobClient(fileName);

            await blob.DeleteIfExistsAsync();
        }

        public async Task<string> EditFile(string containerName, IFormFile file, string fileRoute)
        {
            await DeleteFile(fileRoute, containerName);

            return await SaveFile(containerName, file);
        }

        public async Task<string> SaveFile(string containerName, IFormFile file)
        {
            var client = new BlobContainerClient(connectionString, containerName);
            await client.CreateIfNotExistsAsync();
            client.SetAccessPolicy(PublicAccessType.Blob);

            var extension = Path.GetExtension(file.FileName);
            var fileName = $"{Guid.NewGuid()}{extension}";
            var blob = client.GetBlobClient(fileName);

            await blob.UploadAsync(file.OpenReadStream());
            a
            return blob.Uri.ToString();
        }

    }
}
