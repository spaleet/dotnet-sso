using System.Security.Claims;
using IdentityModel;
using IdentityServer4.Test;

namespace AuthProvider.Identity
{
    public class Users
    {
        public static List<TestUser> Get()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "56892347",
                    Username = "procoder",
                    Password = "password",
                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Email, "support@procodeguide.com"),
                        new Claim(JwtClaimTypes.Role, "admin"),
                        new Claim(JwtClaimTypes.WebSite, "https://procodeguide.com")
                    }
                }
            };
        }
    }
}
