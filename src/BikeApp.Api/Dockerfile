# Use the official .NET 8.0 runtime as the base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Use the .NET 8.0 SDK for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["BikeApp.Api/BikeApp.Api.csproj", "BikeApp.Api/"]
RUN dotnet restore "BikeApp.Api/BikeApp.Api.csproj"
COPY . .
WORKDIR "/src/BikeApp.Api"
RUN dotnet build "BikeApp.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "BikeApp.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Set the URLs that the application will listen on
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "BikeApp.Api.dll"]