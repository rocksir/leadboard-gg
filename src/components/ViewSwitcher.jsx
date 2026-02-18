const ViewSwitcher = ({ view, onChange }) => {
  return (
    <div className="view-switcher">
      <button
        className={view === 'admin' ? 'active' : ''}
        onClick={() => onChange('admin')}
        type="button"
      >
        Admin View
      </button>
      <button
        className={view === 'public' ? 'active' : ''}
        onClick={() => onChange('public')}
        type="button"
      >
        Public Leaderboard
      </button>
    </div>
  );
};

export default ViewSwitcher;
