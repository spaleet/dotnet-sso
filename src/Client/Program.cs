using Client;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddRazorPages();

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = "cookie";
    options.DefaultChallengeScheme = "oidc";
})
            .AddCookie("cookie")
            .AddOpenIdConnect("oidc", options =>
            {
                options.Authority = "https://localhost:5001";
                options.ClientId = "clientApp";
                options.ClientSecret = "clientApp";

                options.ResponseType = "code";
                options.UsePkce = true;
                options.ResponseMode = "query";

                options.Scope.Add("clientApi.read");
                options.SaveTokens = true;
            });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("BasicAuth", policy =>
    {
        policy.RequireAuthenticatedUser();
    });

    options.AddPolicy("AdminClaim", policy =>
    {
        policy.RequireClaim("admin");
    });

    options.AddPolicy("AdminOnly", policy =>
    {
        policy.Requirements.Add(new RoleRequirement("admin"));
    });
});

var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapRazorPages();

app.Run();