using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;

namespace Client.Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly HttpClient _client;
    private readonly ILogger<AuthController> _logger;
    private readonly IConfiguration _config;

    public AuthController(ILogger<AuthController> logger, IHttpClientFactory factory, IConfiguration config)
    {
        _logger = logger;
        _client = factory.CreateClient("Auth_Provider");
        _config = config;
    }

    // GET /api/Auth/credentials
    [HttpGet("credentials")]
    public async Task<IActionResult> GetRequestClientCredentialsTokenAsync()
    {
        var discovery = await _client.GetDiscoveryDocumentAsync();
        
        if (discovery.IsError) 
            return BadRequest(discovery.Error);

        // request token
        var tokenResponse = await _client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
        {
            Address = discovery.TokenEndpoint,
            ClientId = _config["Auth_Provider:client_id"],
            ClientSecret = _config["Auth_Provider:client_secret"],
            Scope = _config["Auth_Provider:scope"]
        });

        if (tokenResponse.IsError)
        {
            _logger.LogError("Error Occurd During Token Request : {error}", tokenResponse.Error);
            return BadRequest(tokenResponse.Error);
        }

        _logger.LogInformation("TokenResponse.Json : {token}", tokenResponse.Json);
        _logger.LogInformation("\n\n");

        return Ok(tokenResponse.Json);
    }
}