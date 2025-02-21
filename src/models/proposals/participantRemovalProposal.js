/**
 * Participant Removal Proposal model.
 */

export class ParticipantRemovalProposal {
  constructor(id, thread, frabric, creator, type, state, votes, supermajority, startTimestamp, endTimestamp, info, removalFee, participant) {
    this.id = id;
    this.thread = thread;
    this.frabric = frabric;
    this.creator = creator;
    this.type = type;
    this.state = state;
    this.votes = votes;
    this.supermajority = supermajority;
    this.startTimestamp = startTimestamp;
    this.endTimestamp = endTimestamp;
    this.info = info;
    this.removalFee = removalFee;
    this.participant = participant;
  }
}