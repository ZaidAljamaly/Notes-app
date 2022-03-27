from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('notes', views.getNotes, name='notes'),
    path('notes/<str:pk>/', views.getNote, name='note'),
    path('notes/new', views.createNote, name='create'),
    path('notes/<str:pk>/update', views.UpdateNote, name='update'),
    path('notes/<str:pk>/delete', views.DeleteNote, name='delete'),
    path('notes/ss', views.searchNote,name='search')
]
