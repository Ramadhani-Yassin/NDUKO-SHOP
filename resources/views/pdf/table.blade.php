<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'Export' }}</title>
    <style>
        body { font-family: DejaVu Sans, Arial, sans-serif; font-size: 12px; color: #111; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; }
        th { background: #f3f4f6; }
        h2 { margin: 0 0 12px 0; font-size: 18px; }
    </style>
</head>
<body>
<h2>{{ $title ?? 'Export' }}</h2>
<table>
    <thead>
    <tr>
        @foreach(($headers ?? []) as $h)
            <th>{{ $h }}</th>
        @endforeach
    </tr>
    </thead>
    <tbody>
    @foreach(($rows ?? []) as $r)
        <tr>
            @foreach($r as $cell)
                <td>{{ $cell }}</td>
            @endforeach
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html> 