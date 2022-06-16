using IdentityServer4;
using IdentityServer4.Models;

namespace AuthProvider.Identity
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "clientApi",
                    ClientName = "clientApi",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets = new List<Secret> {new Secret("clientApi".Sha256())},
                    AllowedScopes = new List<string> { "clientApi.read" }
                },
                new Client
                {
                    ClientId = "clientApp",
                    ClientName = "clientApp",
                    ClientSecrets = new List<Secret> {new Secret("clientApp".Sha256())},

                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris = new List<string> {"https://localhost:7180/signin-oidc"},
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "role",
                        "clientApi.read"
                    },

                    RequirePkce = true,
                    AllowPlainTextPkce = false
                }
            };
        }
    }
}
