@extends('layouts.app')

@section('content')
    <dashboard-component :user=<?= Auth::user() ?>></dashboard-component>    
@endsection
