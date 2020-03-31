# create a debug build of all projects used by app server
# for production readiness use docker_composer.yml
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM  mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build-ms-authdata
WORKDIR /src
COPY . .
RUN dotnet restore "MicroServices/Authentication/ServiceLayer/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.csproj"
RUN dotnet build "MicroServices/Authentication/ServiceLayer/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.csproj" -c Release -o /app/build

FROM build-ms-authdata AS publish-ms-authdata
RUN dotnet publish "MicroServices/Authentication/ServiceLayer/JoergIsAGeek.Workshop.Enterprise.ServiceLayer.csproj" -c Release -o /app/publish

FROM base AS final-ms-authdata
WORKDIR /app
EXPOSE 5001
COPY --from=publish-ms-authdata /app/publish .
ENTRYPOINT ["dotnet", "JoergIsAGeek.Workshop.Enterprise.ServiceLayer.dll"]
