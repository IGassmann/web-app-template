# Pull Request (PR) Guidelines

## Submitting a Pull Request for Review

### Keep it Small

Try to only fix one issue or add one feature within the pull request. In general, the right size for
a PR is **one self-contained change**. If a PR makes substantive changes to more than ~5 files, or
took longer than 1–2 days to write, or would take more than 20 minutes to review, consider splitting
it into multiple self-contained PRs. For example, a developer can submit one change that defines the
API for a new feature in terms of interfaces and documentation, and a second change that adds
implementations for those interfaces. For complex changes that should merge into the mainline branch
as a single unit but are too large to fit into one reasonable pull request, consider a stacked pull
request model.

To learn more about the benefits of keeping pull requests small, read
[Working in Small Batches](https://cloud.google.com/architecture/devops/devops-process-working-in-small-batches).

### Be Descriptive

A PR description is essential to help the reviewers obtain the necessary context. The description
should be informative. It might include a brief description of the problem that’s being solved, and
why this is the best approach. If there are any shortcomings to the approach, they should be
mentioned. If relevant, include background information such as relevant issues, and links to related
documents. Even small PRs deserve a little attention to detail. Put the PR in context.

It can also be helpful to open a
[draft pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)
at the start of the development to document first and lay down the tasks with a checklist.

### Self Review and Test

Only submit to review **complete, self-reviewed (by diff), and self-tested PRs**. In order to save
reviewers’ time, test the submitted changes and make sure it builds and passes code quality checks,
before assigning reviewers.

We recommend opening a
[draft pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)
to help you review your PR before assigning reviewers. If you find relevant, you can also drop some
comments to provide more context to reviewers.

### Favor Synchronous Reviews

After submitting a PR if a fitting reviewer is available, ask him to review right then with you.

That optimizes for lead time. Short lead times means smaller batches of work, which makes
synchronous review less of a context switch.

Doing the review in real-time allows for richer conversations. The reviewer can share his thinking
process while going through the PR.

During the real-time review it’s also alright to stop and research/back-check facts such as best
practices, standards, and conventions.

### Responding to Reviews

Part of the purpose of the code review is to improve the author’s changes. Consequently, don’t b
offended by your reviewer’s suggestions and take them seriously even if you don’t agree. **Respond
to every comment**, even if it’s only a simple “ACK”, “done”, or a "thumbs up." Explain why you made
certain decisions, why some function exists, etc. If you can’t come to an agreement with the
reviewer, **switch to real-time communication, or seek an outside opinion**.

## Reviewing Pull Requests

### Keep the Flow Going

Pull requests are the fundamental unit of how we progress change. If PRs are getting clogged up in
the system, either unreviewed or unmanaged, they are preventing a piece of work from being
completed.

As PRs clog up in the system, merges become more difficult, as other features and fixes are applied
to the same codebase. This, in turn, slows them down further, and often completely blocks progress
on a given codebase.

There is a balance between flow and ensuring the quality of our PRs. As a reviewer, you should make
a call whether a code quality issue is sufficient to block the PR whilst the code is improved.
Possibly it is more prudent to simply flag that the code needs rework, and raise an issue.

### Talk in Person if Necessary

Code review tools and messaging tools allow us to communicate with our peers in an asynchronous and
effortless way. However, there are quite a few situations where a proper human interaction, either
face to face or via voice/video, cannot be beaten.

Complex issues, for example, can be much more efficient and positively resolved once you hop over to
your colleague or call him and discuss it personally. The same holds true for contentious issues or
sensitive matters.

Maybe it is a better strategy to write a private email or seek a personal discussion with the code
author if you think you might hurt some feelings are make the engineer lose the face. So, whenever
you face a complex issue or might hurt some feelings, rethink your communication channels, and act
accordingly.

### Document Decisions

Even though less traceable conversations, such as face to face or video calls can make a big
difference for team dynamics, it is important to document the discussion. Especially the code review
outcome should be tracked for future reference.

The PR is the right communication channel for all simple matters, as it allows the whole team to
follow along, and enables to look-up decisions and understand code development after the fact.

### Don't Add to the PR Yourself

It's sometimes tempting to fix a bug in a PR yourself, to rework a section to meet coding
standards, or to merge the PR yourself.

If you do this without communicating beforehand with the author, you might interfere with his work
and steal the opportunity to explain what he did. For code changes, use instead
[GitHub suggestions](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)
to propose code changes that the author can easily commit.

If the original PR is “good enough,” approve the PR and leave comments about the changes
you'd like to see. If the author doesn't have time to make the changes, you can make them yourself
in a new PR.

Regarding the merge, the author is always the best person to know when the PR is ready to be merged,
especially when there are dependencies like other PRs that need to be merged first, configuration
changes, or other things that need to be done before the PR can be merged. You also want the PR
author to be available immediately if something goes wrong after the merge.

Alternatively, you can ask the author to collaborate in his PR so that you can push changes to his
branch. This is a good option if the author is unavailable, but you still want to make changes to
the PR. Just make sure to communicate with the author beforehand.

## References

- [Google - Engineering Practices Documentation](https://google.github.io/eng-practices/)
- [Palantir - Code Review Best Practices](https://medium.com/palantir/code-review-best-practices-19e02780015f)
- [DORA - DevOps Capabilities](https://cloud.google.com/architecture/devops)
- [Mike Pountney - Pull Request Etiquette](https://gist.github.com/mikepea/863f63d6e37281e329f8)
- [Zalando - A Plea For Small Pull Requests](https://jobs.zalando.com/en/tech/blog/a-plea-for-small-pull-requests)
- [Code Review Research Blog Post Series](https://www.michaelagreiler.com/code-review-blog-post-series/)
