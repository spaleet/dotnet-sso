using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthProvider.Identity
{
    public class Scopes
    {
        public static IEnumerable<ApiScope> GetApiScopes()
        {
            return new[]
            {
                new ApiScope("clientApi.read", "Read Access to Weather API"),
                new ApiScope("clientApi.write", "Write Access to Weather API"),
            };
        }
    }
}
