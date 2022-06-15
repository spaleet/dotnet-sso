using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IdentityServer4EntityFramework.Migrations.IdentityServer.ConfigurationDb
{
    public partial class Config : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                "ApiResources",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>("TEXT", maxLength: 1000, nullable: true),
                    DisplayName = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    Enabled = table.Column<bool>("INTEGER", nullable: false),
                    Name = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_ApiResources", x => x.Id); });

            migrationBuilder.CreateTable(
                "Clients",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AbsoluteRefreshTokenLifetime = table.Column<int>("INTEGER", nullable: false),
                    AccessTokenLifetime = table.Column<int>("INTEGER", nullable: false),
                    AccessTokenType = table.Column<int>("INTEGER", nullable: false),
                    AllowAccessTokensViaBrowser = table.Column<bool>("INTEGER", nullable: false),
                    AllowOfflineAccess = table.Column<bool>("INTEGER", nullable: false),
                    AllowPlainTextPkce = table.Column<bool>("INTEGER", nullable: false),
                    AllowRememberConsent = table.Column<bool>("INTEGER", nullable: false),
                    AlwaysIncludeUserClaimsInIdToken = table.Column<bool>("INTEGER", nullable: false),
                    AlwaysSendClientClaims = table.Column<bool>("INTEGER", nullable: false),
                    AuthorizationCodeLifetime = table.Column<int>("INTEGER", nullable: false),
                    BackChannelLogoutSessionRequired = table.Column<bool>("INTEGER", nullable: false),
                    BackChannelLogoutUri = table.Column<string>("TEXT", maxLength: 2000, nullable: true),
                    ClientClaimsPrefix = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    ClientId = table.Column<string>("TEXT", maxLength: 200, nullable: false),
                    ClientName = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    ClientUri = table.Column<string>("TEXT", maxLength: 2000, nullable: true),
                    ConsentLifetime = table.Column<int>("INTEGER", nullable: true),
                    Description = table.Column<string>("TEXT", maxLength: 1000, nullable: true),
                    EnableLocalLogin = table.Column<bool>("INTEGER", nullable: false),
                    Enabled = table.Column<bool>("INTEGER", nullable: false),
                    FrontChannelLogoutSessionRequired = table.Column<bool>("INTEGER", nullable: false),
                    FrontChannelLogoutUri = table.Column<string>("TEXT", maxLength: 2000, nullable: true),
                    IdentityTokenLifetime = table.Column<int>("INTEGER", nullable: false),
                    IncludeJwtId = table.Column<bool>("INTEGER", nullable: false),
                    LogoUri = table.Column<string>("TEXT", maxLength: 2000, nullable: true),
                    PairWiseSubjectSalt = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    ProtocolType = table.Column<string>("TEXT", maxLength: 200, nullable: false),
                    RefreshTokenExpiration = table.Column<int>("INTEGER", nullable: false),
                    RefreshTokenUsage = table.Column<int>("INTEGER", nullable: false),
                    RequireClientSecret = table.Column<bool>("INTEGER", nullable: false),
                    RequireConsent = table.Column<bool>("INTEGER", nullable: false),
                    RequirePkce = table.Column<bool>("INTEGER", nullable: false),
                    SlidingRefreshTokenLifetime = table.Column<int>("INTEGER", nullable: false),
                    UpdateAccessTokenClaimsOnRefresh = table.Column<bool>("INTEGER", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_Clients", x => x.Id); });

            migrationBuilder.CreateTable(
                "IdentityResources",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>("TEXT", maxLength: 1000, nullable: true),
                    DisplayName = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    Emphasize = table.Column<bool>("INTEGER", nullable: false),
                    Enabled = table.Column<bool>("INTEGER", nullable: false),
                    Name = table.Column<string>("TEXT", maxLength: 200, nullable: false),
                    Required = table.Column<bool>("INTEGER", nullable: false),
                    ShowInDiscoveryDocument = table.Column<bool>("INTEGER", nullable: false)
                },
                constraints: table => { table.PrimaryKey("PK_IdentityResources", x => x.Id); });

            migrationBuilder.CreateTable(
                "ApiClaims",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ApiResourceId = table.Column<int>("INTEGER", nullable: false),
                    Type = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiClaims", x => x.Id);
                    table.ForeignKey(
                        "FK_ApiClaims_ApiResources_ApiResourceId",
                        x => x.ApiResourceId,
                        "ApiResources",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ApiScopes",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ApiResourceId = table.Column<int>("INTEGER", nullable: false),
                    Description = table.Column<string>("TEXT", maxLength: 1000, nullable: true),
                    DisplayName = table.Column<string>("TEXT", maxLength: 200, nullable: true),
                    Emphasize = table.Column<bool>("INTEGER", nullable: false),
                    Name = table.Column<string>("TEXT", maxLength: 200, nullable: false),
                    Required = table.Column<bool>("INTEGER", nullable: false),
                    ShowInDiscoveryDocument = table.Column<bool>("INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiScopes", x => x.Id);
                    table.ForeignKey(
                        "FK_ApiScopes_ApiResources_ApiResourceId",
                        x => x.ApiResourceId,
                        "ApiResources",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ApiSecrets",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ApiResourceId = table.Column<int>("INTEGER", nullable: false),
                    Description = table.Column<string>("TEXT", maxLength: 1000, nullable: true),
                    Expiration = table.Column<DateTime>("TEXT", nullable: true),
                    Type = table.Column<string>("TEXT", maxLength: 250, nullable: true),
                    Value = table.Column<string>("TEXT", maxLength: 2000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiSecrets", x => x.Id);
                    table.ForeignKey(
                        "FK_ApiSecrets_ApiResources_ApiResourceId",
                        x => x.ApiResourceId,
                        "ApiResources",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientClaims",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Type = table.Column<string>("TEXT", maxLength: 250, nullable: false),
                    Value = table.Column<string>("TEXT", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientClaims", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientClaims_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientCorsOrigins",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Origin = table.Column<string>("TEXT", maxLength: 150, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientCorsOrigins", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientCorsOrigins_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientGrantTypes",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    GrantType = table.Column<string>("TEXT", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientGrantTypes", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientGrantTypes_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientIdPRestrictions",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Provider = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientIdPRestrictions", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientIdPRestrictions_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientPostLogoutRedirectUris",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    PostLogoutRedirectUri = table.Column<string>("TEXT", maxLength: 2000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientPostLogoutRedirectUris", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientPostLogoutRedirectUris_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientProperties",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Key = table.Column<string>("TEXT", maxLength: 250, nullable: false),
                    Value = table.Column<string>("TEXT", maxLength: 2000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientProperties", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientProperties_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientRedirectUris",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    RedirectUri = table.Column<string>("TEXT", maxLength: 2000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientRedirectUris", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientRedirectUris_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientScopes",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Scope = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientScopes", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientScopes_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ClientSecrets",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>("INTEGER", nullable: false),
                    Description = table.Column<string>("TEXT", maxLength: 2000, nullable: true),
                    Expiration = table.Column<DateTime>("TEXT", nullable: true),
                    Type = table.Column<string>("TEXT", maxLength: 250, nullable: true),
                    Value = table.Column<string>("TEXT", maxLength: 2000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientSecrets", x => x.Id);
                    table.ForeignKey(
                        "FK_ClientSecrets_Clients_ClientId",
                        x => x.ClientId,
                        "Clients",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "IdentityClaims",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IdentityResourceId = table.Column<int>("INTEGER", nullable: false),
                    Type = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityClaims", x => x.Id);
                    table.ForeignKey(
                        "FK_IdentityClaims_IdentityResources_IdentityResourceId",
                        x => x.IdentityResourceId,
                        "IdentityResources",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                "ApiScopeClaims",
                table => new
                {
                    Id = table.Column<int>("INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ApiScopeId = table.Column<int>("INTEGER", nullable: false),
                    Type = table.Column<string>("TEXT", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiScopeClaims", x => x.Id);
                    table.ForeignKey(
                        "FK_ApiScopeClaims_ApiScopes_ApiScopeId",
                        x => x.ApiScopeId,
                        "ApiScopes",
                        "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                "IX_ApiClaims_ApiResourceId",
                "ApiClaims",
                "ApiResourceId");

            migrationBuilder.CreateIndex(
                "IX_ApiResources_Name",
                "ApiResources",
                "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                "IX_ApiScopeClaims_ApiScopeId",
                "ApiScopeClaims",
                "ApiScopeId");

            migrationBuilder.CreateIndex(
                "IX_ApiScopes_ApiResourceId",
                "ApiScopes",
                "ApiResourceId");

            migrationBuilder.CreateIndex(
                "IX_ApiScopes_Name",
                "ApiScopes",
                "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                "IX_ApiSecrets_ApiResourceId",
                "ApiSecrets",
                "ApiResourceId");

            migrationBuilder.CreateIndex(
                "IX_ClientClaims_ClientId",
                "ClientClaims",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientCorsOrigins_ClientId",
                "ClientCorsOrigins",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientGrantTypes_ClientId",
                "ClientGrantTypes",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientIdPRestrictions_ClientId",
                "ClientIdPRestrictions",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientPostLogoutRedirectUris_ClientId",
                "ClientPostLogoutRedirectUris",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientProperties_ClientId",
                "ClientProperties",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientRedirectUris_ClientId",
                "ClientRedirectUris",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_Clients_ClientId",
                "Clients",
                "ClientId",
                unique: true);

            migrationBuilder.CreateIndex(
                "IX_ClientScopes_ClientId",
                "ClientScopes",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_ClientSecrets_ClientId",
                "ClientSecrets",
                "ClientId");

            migrationBuilder.CreateIndex(
                "IX_IdentityClaims_IdentityResourceId",
                "IdentityClaims",
                "IdentityResourceId");

            migrationBuilder.CreateIndex(
                "IX_IdentityResources_Name",
                "IdentityResources",
                "Name",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "ApiClaims");

            migrationBuilder.DropTable(
                "ApiScopeClaims");

            migrationBuilder.DropTable(
                "ApiSecrets");

            migrationBuilder.DropTable(
                "ClientClaims");

            migrationBuilder.DropTable(
                "ClientCorsOrigins");

            migrationBuilder.DropTable(
                "ClientGrantTypes");

            migrationBuilder.DropTable(
                "ClientIdPRestrictions");

            migrationBuilder.DropTable(
                "ClientPostLogoutRedirectUris");

            migrationBuilder.DropTable(
                "ClientProperties");

            migrationBuilder.DropTable(
                "ClientRedirectUris");

            migrationBuilder.DropTable(
                "ClientScopes");

            migrationBuilder.DropTable(
                "ClientSecrets");

            migrationBuilder.DropTable(
                "IdentityClaims");

            migrationBuilder.DropTable(
                "ApiScopes");

            migrationBuilder.DropTable(
                "Clients");

            migrationBuilder.DropTable(
                "IdentityResources");

            migrationBuilder.DropTable(
                "ApiResources");
        }
    }
}