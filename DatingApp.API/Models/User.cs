namespace DatingApp.API.Models
{
    public class User
    {
        // Todo: fazer a aula de criação da classe User e update o banco


        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}