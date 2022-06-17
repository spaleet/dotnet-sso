using IdentityServer4.Models;

namespace AuthProvider.Configuration;

public class Scopes
{
    public static IEnumerable<ApiScope> GetApiScopes()
    {
        return new[]
        {
            new ApiScope("clientApi.read", "Read Access to Weather API"),
            new ApiScope("clientApi.write", "Write Access to Weather API")
        };
    }
}