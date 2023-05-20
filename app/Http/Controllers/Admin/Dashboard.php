<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ClassName;
use App\Models\Admin\Dashboard as AdminDashboard;
use App\Models\User;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:225',
            'brief' => 'required',
            'link' => 'required',
            'project' => 'required|string',
            'file' => 'required|file',
        ]);
        // Retrieve the validated form data
        $title = $request->input('title');
        $brief = $request->input('brief');
        $project = $request->input('project');
        $link = $request->input('link');
        $file = $request->file('file');

        // Store the uploaded image
        $imageName = time() . '.' . $file->extension();
        $file->move(public_path('uploads'), $imageName);

        $project = AdminDashboard::create([
            'title' => $title,
            'brief' => $brief,
            'link' => $link,
            'project' => htmlentities($project),
            'file' => $imageName,
        ]);

        if($project){
            return response()->json(['message' => 'Project Added Sucessfully!'], 201);
        }
    }

    public function projects(){
        $projects = AdminDashboard::all();
        return response()->json($projects, 201);
    }

    public function projectsDetails($id){
        $projects = AdminDashboard::where('id', '=', $id)->first();
        return response()->json($projects, 201);
    }
}
