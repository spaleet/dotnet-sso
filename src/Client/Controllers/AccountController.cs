using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers;

public class AccountController : Controller
{
    [AllowAnonymous]
    public IActionResult LogOut()
    {
        return new SignOutResult(new[] { CookieAuthenticationDefaults.AuthenticationScheme, "oidc" });
    }
}