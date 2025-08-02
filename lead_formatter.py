# lead_formatter.py

from fastapi.responses import JSONResponse, StreamingResponse
import csv
import io

def format_leads(leads, format_type="json"):
    if format_type == "csv":
        output = io.StringIO()
        writer = csv.DictWriter(output, fieldnames=leads[0].keys())
        writer.writeheader()
        writer.writerows(leads)
        output.seek(0)
        return StreamingResponse(iter([output.read()]), media_type="text/csv")
    else:
        return JSONResponse(content=leads)
