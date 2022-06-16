{{ $global := resources.Match "js/global/**.js" }}

console.log('{{$global}}');