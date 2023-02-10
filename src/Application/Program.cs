global using FastEndpoints;

var builder = WebApplication.CreateBuilder();
var services = builder.Services.AddFastEndpoints();
services.AddSpaStaticFiles(c => c.RootPath = "dist");
var app = builder.Build();
app.UseAuthorization();
app.UseFastEndpoints(x =>
{
    x.Endpoints.RoutePrefix = "api";
});
app.UseSpa(x =>
{
    if (!app.Environment.IsDevelopment())
        return;
    x.UseProxyToSpaDevelopmentServer("http://localhost:8001");
});
app.Run();
