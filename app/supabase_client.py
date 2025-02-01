import os
from flask import g
from werkzeug.local import LocalProxy
from supabase.client import Client, ClientOptions
from flask_storage import FlaskSessionStorage

supabase_key = os.getenv('SUPABASE_KEY')
supabase_url = os.getenv('SUPABASE_URL')

def get_supabase() -> Client:
    if "supabase" not in g:
        g.supabase = Client(
            supabase_url,
            supabase_key,
            options=ClientOptions(
                storage=FlaskSessionStorage(),
                flow_type="pkce"
            ),
        )
    return g.supabase

supabase: Client = LocalProxy(get_supabase)