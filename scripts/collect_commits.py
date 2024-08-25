import os
import subprocess
from git import Repo

repo_url = "https://github.com/QuivrHQ/quivr"
repo_path = r"C:\Users\ahamz\quivr"  # Updated path to your desired location

if not os.path.exists(repo_path):
    repo = Repo.clone_from(repo_url, repo_path)
else:
    repo = Repo(repo_path)  # This line was missing in your original code

commits = list(repo.iter_commits('main', max_count=10))
for commit in commits:
    print(f"Commit: {commit.hexsha}\nAuthor: {commit.author.name}\nDate: {commit.authored_datetime}\nMessage: {commit.message}\n")

def trigger_sonar_analysis():
    os.chdir(repo_path)
    result = subprocess.run(["sonar-scanner"], capture_output=True, text=True)
    print(result.stdout)

trigger_sonar_analysis()
