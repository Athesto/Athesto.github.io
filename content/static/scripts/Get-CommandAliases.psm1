function Get-CommandAliases {
    <#
    .SYNOPSIS
    Retrieves aliases related to a command or the command associated with an alias.

    .DESCRIPTION
    The function "Get-CommandAliases" is used to explore bidirectional relationships
    between aliases and commands. You can input an alias (e.g., 'ls') to retrieve the
    command it is associated with, or input a command (e.g., 'Get-ChildItem') to find its assigned aliases.

    .PARAMETER Name
    Specifies the alias or command to resolve its relationships.
    - If you input an alias, it will return the associated command.
    - If you input a command, it will return a list of assigned aliases.

    .EXAMPLE
    Get-CommandAliases -Name ls
    Returns the command 'Get-ChildItem' associated with the alias 'ls'.

    .EXAMPLE
    Get-CommandAliases -Name Get-ChildItem
    Returns a list of aliases assigned to the command 'Get-ChildItem'.

    .NOTES
    This function is useful for understanding how aliases are configured in your PowerShell environment.


    Author: Gustavo Mejía
    Created: 2025
    #>
    [Alias("gca", "which")]
    param(
        [Parameter(Mandatory=$true)]
        [string]$Name
    )
    $cmdObject = get-command -Name $Name -ErrorAction Stop

    if (($cmdObject).CommandType -eq 'Alias') {
        $cmdObject = get-command -Name $cmdObject.Definition
    }

    $aliases = (get-alias -Definition $cmdObject.Name -ErrorAction SilentlyContinue).Name -join ','

    #Enriquecer el objeto original agregando la propiedad "Aliases"
    return [PSCustomObject]@{
        CommandType = $cmdObject.CommandType
        Name = $cmdObject.Name
        Aliases = $aliases
        #Version = $cmdObject.Version
        Source = $cmdObject.Source
    }
}
