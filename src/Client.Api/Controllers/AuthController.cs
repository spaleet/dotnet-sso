using IdentityModel.Client;
using Microsoft.AspNetCore.Mvc;

namespace Client.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly HttpClient _client;
    private readonly ILogger<AuthController> _logger;

    public AuthController(ILogger<AuthController> logger, IHttpClientFactory factory)
    {
        _logger = logger;
        _client = factory.CreateClient("Auth_Provider");
    }

    [HttpGet]
    public async Task<IActionResult> GetRequestClientCredentialsTokenAsync()
    {
        var discovery = await _client.GetDiscoveryDocumentAsync();
        if (discovery.IsError) 
            return BadRequest(discovery.Error);

        // TODO : Read Client Secret From appsettings.json
        // request token
        var tokenResponse = await _client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
        {
            Address = discovery.TokenEndpoint,
            ClientId = "clientApi",
            ClientSecret = "clientApi",
            Scope = "clientApi.read"
        });

        if (tokenResponse.IsError)
        {
            _logger.LogError("Error Occurd During Token Request : {0}", tokenResponse.Error);
            return BadRequest(tokenResponse.Error);
        }

        _logger.LogInformation("TokenResponse.Json : {0}", tokenResponse.Json);
        _logger.LogInformation("\n\n");
        return Ok(tokenResponse.Json);

        // call api
        //var apiClient = new HttpClient();
        //apiClient.SetBearerToken(tokenResponse.AccessToken);

        //var response = await apiClient.GetAsync("https://localhost:6001/identity");
        //if (!response.IsSuccessStatusCode)
        //{
        //    Console.WriteLine(response.StatusCode);
        //}
        //else
        //{
        //    var content = await response.Content.ReadAsStringAsync();
        //    Console.WriteLine(JArray.Parse(content));
        //}
    }
}