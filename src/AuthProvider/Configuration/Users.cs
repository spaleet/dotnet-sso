using System.Security.Claims;
using IdentityModel;
using IdentityServer4.Test;

namespace AuthProvider.Configuration;

public class Users
{
    public static List<TestUser> Get()
    {
        return new List<TestUser>
        {
            new()
            {
                SubjectId = "56892347",
                Username = "user",
                Password = "1234@",
                Claims = new List<Claim>
                {
                    new(JwtClaimTypes.Email, "user@username.com"),
                    new(JwtClaimTypes.Role, "admin"),
                    new(JwtClaimTypes.Role, "user")
                },
                IsActive = true
            }
        };
    }
}