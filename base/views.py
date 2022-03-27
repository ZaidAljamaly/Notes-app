from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializer import NoteSerializers


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getNotes(request):
    note = Note.objects.all().order_by('-update')
    Serializers = NoteSerializers(note, many=True)
    return Response(Serializers.data)


@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    Serializers = NoteSerializers(note, many=False)
    return Response(Serializers.data)


@api_view(['PUT'])
def UpdateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    Serializers = NoteSerializers(instance=note, data=data)
    if Serializers.is_valid():
       Serializers.save()
    return Response(Serializers .data)


@api_view(['DELETE'])
def DeleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('note is deleted')


@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(body=data['body'])
    serializer = NoteSerializers(note, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def searchNote(request):
    q = request.GET.get('q') if request.GET.get('q') !=None else''
    ss = Note.objects.filter(body__icontains=q)
    serializer = NoteSerializers(ss, many=False)
    return Response(serializer.data)

