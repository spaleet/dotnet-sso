using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Client.Api.Controllers;

[ApiController]
[Route("/api/[controller]")]
[Authorize]
public class SecretController : ControllerBase
{
    private readonly ILogger<SecretController> _logger;

    public SecretController(ILogger<SecretController> logger)
    {
        _logger = logger;
    }

    // GET /api/Secret
    [HttpGet]
    public IActionResult GetSecret()
    {
        return Ok("The Secret is : ****");
    }
}