---
title: Using Netspective GitLab Server
author: Shahid N. Shah
type: post
date: 2012-09-25T10:37:57+00:00
url: /knowledgebase/it-infrastructure-sops/2012/09/25/using-netspective-gitlab-server/
post_private:
  - 'a:1:{i:0;s:8:"Required";}'
categories:
  - IT Infrastructure SOPs

---
### Usage

Don&#8217;t be shy in creating repositories. GitHub repositories should be as small and decoupled as possible. When in doubt, create two repo&#8217;s instead of one &#8212; even if there are dependencies.

When possible, use comments, wiki, issues, wall, and snippets in GitLab versus ActiveCollab.

There may be some confusion about when to use Wiki, Issues, Wall, and Snippets vs. ActiveCollab. If a task is directly related to code then we should use Issues in GitLab not ActiveCollab. When a task doesn&#8217;t map directly to a piece of code or crosses multiple GitLab projects then it should go into a ActiveCollab. When in doubt, ask the project manager.

Of course there are many projects that don&#8217;t have direct coding tasks &#8212; those wouldn&#8217;t be appropriate for GitLab.

### General Best Practices

  * Read 
      * Git Best Practices 
          * <http://sethrobertson.github.com/GitBestPractices/>
      * Keep commits small, logical, and specific to a single task; commit early and commit often, document commit messages really well. In CVS, Subversion, and other revision control systems larger commits are encouraged but don&#8217;t do that in Git.
      * Group multiple commits into a push at regular intervals when it won&#8217;t break someone else&#8217;s code
      * See this for an example of good messages, commits, and pushes: http://rcs.cm.netspective.com/bfelob-oge-findiscnonpas/commits
      * Some other guidelines to review: 
          * <http://www.lullabot.com/articles/git-best-practices-workflow-guidelines>
          * <https://wiki.duraspace.org/display/FCREPO/Git+Guidelines+and+Best+Practices>
    
      * Probably need [where to buy doxycycline][1], [zithromax reviews][2] to create a Netspective blog post about this

### Project Naming Conventions

    1. Name format is "{Customer} {Project}" such as "NeuroVista FairView Drupal" or "Netspective Narthex Workstation Host"
        * Note proper English names with appropriate capitalization, use long descriptive names
    2. Git repo name format is "{customer}-{project}" such as "neurovista-fairview-drupal"  or "netspective-narthex-workstation-host"
        * note lower case with dashes as separators, long readable names are good
    
    For all Netspective projects the "Customer" is "Netspective" and not blank.
    

Be sure to set both the Project name and the advanced settings. Take your time naming projects.

<img src="https://www.netspective.com/wp-content/uploads/2012/09/naming-projects.png" alt="" title="naming-projects" width="700" height="392" class="alignnone size-full wp-image-55042" />

### Migrating private GitHub repositories to Netspective GitLab server

  1. Go to <http://git.netspective.com>
  2. Make sure your SSH keys are setup in GitHub and in Netspective GitLab servers
  3. Create a new project in Netspective GitLab server using naming convention above
  4. Do the migration 
      1. mkdir $HOME/migrate-github
      2. export GITHUB_PROJECT=fairview-drupal
      3. export GITLAB_PROJECT=neurovista-fairview-drupal
      4. git clone git@github.com:netspective/$GITHUB_PROJECT.git
      5. cd $GITHUB_PROJECT
      6. git remote rm origin
      7. git remote add origin git@rcs.cm.netspective.com:$GITLAB_PROJECT.git
      8. git push -u origin master

  5. Go back to <http://git.netspective.com> and test to make sure it made it there

  6. Delete $HOME/migrate-github/$GITHUB_PROJECT to save disk space

### Splitting Git repositories

When we were on GitHub we were charged for each repo we created so we often combined repo&#8217;s. However, with our cost now zero per repo, we want to be able to create many smaller repo&#8217;s not fewer and larger repo&#8217;s. When possible, repo&#8217;s should not be coupled.

[Here are some instructions for splitting a subpath out into a new repo.][3]

Here are the general steps:
      
export REPO=netspective-client-projects
      
export REPO_URL=git@github.com:netspective/$REPO.git
      
export FILTER_PATH=cardinal/SupplyCentral
      
export NEW\_REPO\_URL=**newrepo**

    mkdir -p $HOME/git-migration
    cd $HOME/git-migration
    
    git clone $REPO_URL
    cd $REPO
    git filter-branch --prune-empty --subdirectory-filter $FILTER_PATH master
    
    git remote rm origin
    git remote add origin $NEW_REPO_URL
    git push -u origin master

 [1]: https://pills24h.com/buy-doxycycline-online-without-prescription/
 [2]: http://prestige-pharmacy.com/buy-zithromax-online/
 [3]: https://help.github.com/articles/splitting-a-subpath-out-into-a-new-repo