import subprocess

def get_commit_history():
    # Get the list of commits
    result = subprocess.run(['git', 'log', '--pretty=format:%H|%an|%ad|%s'], stdout=subprocess.PIPE)
    commits = result.stdout.decode('utf-8').split('\n')
    commit_data = [commit.split('|') for commit in commits]
    return commit_data

def main():
    # Collect commit history
    commit_history = get_commit_history()
    
    # Example: Print or store commit history in a file or database
    with open('commit_history.txt', 'w') as f:
        for commit in commit_history:
            f.write(f"Hash: {commit[0]}, Author: {commit[1]}, Date: {commit[2]}, Message: {commit[3]}\n")

if __name__ == "__main__":
    main()