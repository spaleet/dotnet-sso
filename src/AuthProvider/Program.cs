var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddIdentityServer()
    .AddInMemoryClients(Clients.Get())
    .AddInMemoryIdentityResources(ClientResources.GetIdentityResources())
    .AddInMemoryApiResources(ClientResources.GetApiResources())
    .AddInMemoryApiScopes(Scopes.GetApiScopes())
    .AddTestUsers(Users.Get())
    .AddDeveloperSigningCredential();

var app = builder.Build();

if (app.Environment.IsDevelopment())
    app.UseDeveloperExceptionPage();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseIdentityServer();

app.UseAuthorization();

app.MapDefaultControllerRoute();

app.Run();