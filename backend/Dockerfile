# ---- base image ----
FROM python:3.11-slim

# ---- 環境変数 ----
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ---- 作業ディレクトリ ----
WORKDIR /app

# ---- uv をインストール ----
RUN pip install --no-cache-dir uv

# ---- pyproject.toml を先にコピー（キャッシュ効かせる）----
COPY pyproject.toml ./

# ---- 依存関係インストール ----
RUN uv pip install --system .

# ---- アプリコードコピー ----
COPY app ./app

# ---- ポート ----
EXPOSE 8000

# ---- 起動コマンド ----
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
