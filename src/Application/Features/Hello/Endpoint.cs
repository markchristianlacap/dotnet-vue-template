using Microsoft.AspNetCore.Authorization;

namespace Application.Features.Hello;

public class Response
{
    public string Message { get; set; } = null!;
}

[HttpGet("/hello")]
[AllowAnonymous]
public class Endpoint : EndpointWithoutRequest<Response>
{
    public override async Task HandleAsync(CancellationToken ct)
    {
        await SendAsync(new Response { Message = "Hello World!" });
    }
}
